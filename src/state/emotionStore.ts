import { create } from "zustand";

interface EmotionState {
  selectedEmotion: string;
  setSelectedEmotion: (emotion: string) => void;
}

export const useEmotionStore = create<EmotionState>((set) => ({
  selectedEmotion: "",
  setSelectedEmotion: (emotion) => set({ selectedEmotion: emotion }),
}));
