import dbConnect from "@/lib/mongodb";
import Questionnaire from "@/models/Questionnaire";
import { unstable_noStore as noStore } from "next/cache";
import { Questionnaire as TQuestionnaire } from "@/types/confession";

export async function getQuestionnaireStep(
  id: number
): Promise<TQuestionnaire | null> {
  noStore();
  await dbConnect();

  try {
    const stepData = await Questionnaire.findOne({ id: id })
      .select("-_id")
      .lean();

    if (!stepData) {
      return null;
    }

    return stepData as TQuestionnaire;
  } catch (error) {
    console.error("Database error - Failed to fetch questionnaire step:", error);
    throw new Error("Failed to fetch questionnaire step.");
  }
}

export async function getStepsOrder(): Promise<number[]> {
  noStore();
  await dbConnect();

  try {
    const steps = await Questionnaire.find()
      .select("id -_id")
      .sort({ id: "asc" })
      .lean();

    return steps.map((step) => step.id);
  } catch (error) {
    console.error("Database error - Failed to fetch steps order:", error);
    throw new Error("Failed to fetch steps order.");
  }
}