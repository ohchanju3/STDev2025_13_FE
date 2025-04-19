import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken"); // 로컬 스토리지에서 엑세스 토큰 가져오기

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`; // Authorization 헤더에 Bearer 토큰 추가
  }

  return config;
});

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
    await instance.post(url);
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
export const patchResponse = async <TRequest = null, TResponse = any>(
  url: string,
  requestBody: TRequest | null = null // 기본값을 null로 설정
): Promise<TResponse | null> => {
  try {
    const response = await instance.patch<TResponse>(url, requestBody);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
