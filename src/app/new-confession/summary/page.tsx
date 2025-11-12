"use client";

import * as React from "react";
import { useConfessionStore, SelectedAnswer } from "@/store/confession-store";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function SummaryPage() {
  const router = useRouter();
  const { getAllAnswers, reset } = useConfessionStore();

  const [pdfAnswers, setPdfAnswers] = React.useState<SelectedAnswer[]>([]);

  React.useEffect(() => {
    const allAnswers = getAllAnswers();
    const filtered = allAnswers.filter((a) => a.pdfPhrase !== null);
    setPdfAnswers(filtered);
  }, [getAllAnswers]);

  const formatPhrase = (answer: SelectedAnswer): string => {
    let phrase = answer.pdfPhrase || "";

    if (answer.dialogType === "count" && answer.value) {
      const count = Number(answer.value);
      if (count > 0) {
        phrase = `${phrase} (${count} ${count > 1 ? "vezes" : "vez"})`;
      }
    } else if (answer.dialogType === "text" && answer.value) {
      phrase = `${phrase} (especificamente: ${answer.value})`;
    }

    return phrase.endsWith(".") ? phrase : `${phrase}.`;
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();

    doc.setFont("Helvetica", "bold");
    doc.text("Preparação para Confissão", 14, 20);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Pecados a confessar:", 14, 28);

    const bodyData = pdfAnswers.map((answer, index) => {
      return [`• ${formatPhrase(answer)}`];
    });

    autoTable(doc, {
      startY: 34,
      body: bodyData,
      theme: "plain",
      styles: {
        cellPadding: { top: 1, left: 1, right: 1, bottom: 1 },
        fontSize: 12,
        halign: "left",
      },
      columnStyles: {
        0: { cellWidth: 180 },
      },
      showHead: "never",
    });

    doc.save("confissao.pdf");
  };

  const handleReset = () => {
    reset();
    router.push("/");
  };

  return (
    <main className="container mx-auto max-w-2xl py-12">
      <div className="space-y-6 rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Resumo</h1>
        <p className="text-muted-foreground">
          Abaixo está a lista de pecados que você marcou e que devem ser ditos ao
          padre. Revise-os e baixe o PDF para levar à sua confissão.
        </p>

        {pdfAnswers.length > 0 ? (
          <div className="space-y-4 rounded-md border p-4">
            <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
              {pdfAnswers.map((answer) => (
                <li key={`${answer.questionId}-${answer.label}`}>
                  {formatPhrase(answer)}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="rounded-md border p-4 text-center text-sm font-medium text-muted-foreground">
            Nenhum pecado que necessite confissão foi selecionado.
          </p>
        )}

        <div className="flex flex-col gap-4 md:flex-row">
          <button
            onClick={handleReset}
            className="flex-1 rounded-md bg-secondary px-4 py-2 text-sm text-secondary-foreground"
          >
            Começar de Novo (Limpar)
          </button>
          <button
            onClick={handleDownloadPdf}
            disabled={pdfAnswers.length === 0}
            className="flex-1 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-50"
          >
            Baixar PDF
          </button>
        </div>
      </div>
    </main>
  );
}