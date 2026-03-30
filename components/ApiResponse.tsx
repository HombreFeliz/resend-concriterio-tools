"use client";

interface ApiResponseProps {
  data: Record<string, unknown> | null;
}

export default function ApiResponse({ data }: ApiResponseProps) {
  if (!data) return null;

  const isError = "error" in data;
  const json = JSON.stringify(data, null, 2);

  return (
    <div className="mt-4 animate-in">
      <div
        className={`rounded-xl border overflow-hidden ${
          isError ? "border-error/20" : "border-success/20"
        }`}
      >
        <div
          className={`flex items-center gap-2 px-4 py-2 text-[12px] font-mono border-b ${
            isError
              ? "bg-error/[0.05] text-error border-error/20"
              : "bg-success/[0.05] text-success border-success/20"
          }`}
        >
          <div className={`w-1.5 h-1.5 rounded-full ${isError ? "bg-error" : "bg-success"}`} />
          {isError ? "Error" : "Email enviado"}
        </div>
        <div className="bg-code-bg p-4">
          <pre className="font-mono text-[13px] leading-6 text-text-secondary overflow-x-auto">
            {json}
          </pre>
        </div>
      </div>
    </div>
  );
}
