"use client";

interface ApiResponseProps {
  data: Record<string, unknown> | null;
}

export default function ApiResponse({ data }: ApiResponseProps) {
  if (!data) return null;

  const isError = "error" in data;
  const json = JSON.stringify(data, null, 2);

  return (
    <div
      className={`rounded-xl border overflow-hidden transition-all duration-150 ${
        isError ? "border-error/30" : "border-success/30"
      }`}
    >
      <div
        className={`px-4 py-2 text-xs font-mono ${
          isError
            ? "bg-error/10 text-error"
            : "bg-success/10 text-success"
        }`}
      >
        {isError ? "Error" : "Respuesta de Resend"}
      </div>
      <div className="bg-code-bg p-4">
        <pre className="font-mono text-sm leading-relaxed text-text overflow-x-auto">
          {json}
        </pre>
      </div>
    </div>
  );
}
