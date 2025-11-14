import { StepForm } from "@/components/StepForm";


interface PageProps {
  params: Promise<{
    stepId: string;
  }>;
}

export const revalidate = 0;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getQuestionnaireStep(id: number) {
  const res = await fetch(`${API_URL}/api/step/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Falha ao buscar o step: ${id}`);
  }
  return res.json();
}

async function getStepsOrder(): Promise<number[]> {
  const res = await fetch(`${API_URL}/api/steps/order`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error("Falha ao buscar a ordem dos steps");
  }
  return res.json();
}


export default async function ConfessionStepPage({ params }: PageProps) {
  
  const resolvedParams = await params;
  const stepId = Number(resolvedParams.stepId);

  if (isNaN(stepId)) {
    return null;
  }

  const stepData = await getQuestionnaireStep(stepId);
  const stepsOrder = await getStepsOrder();

  if (!stepData || !stepsOrder || stepsOrder.length === 0) {
    throw new Error(
      `Falha ao carregar dados da API C#. stepData: ${!!stepData}, stepsOrder: ${!!stepsOrder}`
    );
  }

  const currentStepIndex = stepsOrder.indexOf(stepId);

  if (currentStepIndex === -1) {
    throw new Error(`O ID do passo ${stepId} não foi encontrado na ordem.`);
  }

  const prevStepId =
    currentStepIndex > 0 ? stepsOrder[currentStepIndex - 1] : null;
  const nextStepId =
    currentStepIndex < stepsOrder.length - 1
      ? stepsOrder[currentStepIndex + 1]
      : null;

  return (
    <main className="container mx-auto max-w-2xl py-12">
      <StepForm
        stepData={stepData}
        prevStepId={prevStepId}
        nextStepId={nextStepId}
      />
    </main>
  );
}