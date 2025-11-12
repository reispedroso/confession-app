import mongoose, { Schema, Document, models, Model } from "mongoose";
import {
  ConfessionOption,
  ConfessionQuestion,
  Questionnaire as TQuestionnaire,
} from "@/types/confession";

export interface IQuestionnaire extends TQuestionnaire, Omit<Document, "id"> {}

const OptionSchema: Schema = new Schema<ConfessionOption>({
  label: { type: String, required: true },
  pdfPhrase: { type: String, default: null },
  isExclusive: { type: Boolean, required: true },
  dialogType: { type: String, default: null },
});

const QuestionSchema: Schema = new Schema<ConfessionQuestion>({
  id: { type: Number, required: true },
  prompt: { type: String, required: true },
  options: [OptionSchema],
});

const QuestionnaireSchema: Schema = new Schema<IQuestionnaire>(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    subtitle: { type: String, default: null },
    questions: [QuestionSchema],
  },
  {
    id: false,
    collection: "commandments", // <-- ADICIONE ESTA LINHA
  }
);

const Questionnaire: Model<IQuestionnaire> =
  models.Questionnaire ||
  mongoose.model<IQuestionnaire>("Questionnaire", QuestionnaireSchema);

export default Questionnaire;