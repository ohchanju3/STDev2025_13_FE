import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
});

instance.interceptors.request.use(
  async (config) => {
    let accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// GET 요청
export const getResponse = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    return null;
  }
};

// POST 요청 (응답 데이터 없음)
export const postResponseNoData = async (url: string): Promise<boolean> => {
  try {
    await instance.post(url, {
      headers: {
        Authorization: `Bearer `,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// POST 요청 (응답 데이터 있음)
export const postResponse = async <TRequest, TResponse>(
  url: string,
  body: TRequest
): Promise<TResponse | null> => {
  try {
    const response = await instance.post<TResponse>(url, body);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// POST 요청 (응답 데이터 없음)
export const postNoResponse = async <TRequest>(
  url: string,
  requestBody: TRequest,
  config?: { headers?: { [key: string]: string } }
): Promise<boolean> => {
  try {
    if (requestBody instanceof FormData) {
      config = {
        ...config,
        headers: {
          ...config?.headers,
          "Content-Type": "multipart/form-data",
        },
      };
    }

    await instance.post(url, requestBody, config);
    return true;
  } catch (error) {
    console.error("Error posting request:", error);
    return false;
  }
};

// PATCH 요청 (응답 데이터 없음)
export const patchNoResponse = async <TRequest>(
  url: string,
  requestBody: TRequest
): Promise<boolean> => {
  try {
    await instance.patch(url, requestBody);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// PATCH 요청 (응답 데이터 있음)
export const patchResponse = async <TRequest, TResponse>(
  url: string,
  requestBody: TRequest
): Promise<TResponse | null> => {
  try {
    const response = await instance.patch<TResponse>(url, requestBody);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
