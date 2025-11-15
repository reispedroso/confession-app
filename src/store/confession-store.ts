import { create } from "zustand";
import { DialogType } from "@/types/confession";

export interface SelectedAnswer {
  questionId: number;
  prompt: string;
  label: string;
  pdfPhrase: string | null;
  isExclusive: boolean;
  dialogType: DialogType;
  value: string | number | null;
}

interface ConfessionState {
  steps: Record<number, SelectedAnswer[]>;
  setStepAnswers: (stepId: number, answers: SelectedAnswer[]) => void;
  getStepAnswers: (stepId: number) => SelectedAnswer[];
  getAllAnswers: () => SelectedAnswer[];
  reset: () => void;
}

export const useConfessionStore = create<ConfessionState>((set, get) => ({
  steps: {},

  setStepAnswers: (stepId, answers) =>
    set((state) => ({
      steps: {
        ...state.steps,
        [stepId]: answers,
      },
    })),

  getStepAnswers: (stepId) => {
    return get().steps[stepId] || [];
  },

  getAllAnswers: () => {
    return Object.values(get().steps).flat();
  },

  reset: () => {
    set({ steps: {} });
  },
}));