export type DialogType = "count" | "text" | null;

export interface ConfessionOption {
  label: string;
  pdfPhrase: string | null;
  isExclusive: boolean;
  dialogType: DialogType;
}

export interface ConfessionQuestion {
  id: number;
  prompt: string;
  options: ConfessionOption[];
}

export interface Questionnaire {
  id: number;
  title: string;
  subtitle: string | null;
  questions: ConfessionQuestion[];
}