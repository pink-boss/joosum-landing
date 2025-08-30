interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
  description?: string;
}

export default function FormField({
  label,
  required = false,
  children,
  error,
  description,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-5">
      <div className="flex items-start pt-1 md:w-[280px] md:pt-3">
        <span className="text-lg font-semibold text-black md:text-xl">
          {label}
        </span>
        {required && (
          <span className="-mt-0.5 ml-1 text-lg font-semibold text-black md:text-xl">
            *
          </span>
        )}
      </div>
      <div className="flex-1 text-black">
        {children}
        {description && (
          <p className="text-neutral-550 mt-1 text-sm font-medium md:text-base">
            {description}
          </p>
        )}
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
}
