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
    <div className="flex flex-col md:flex-row gap-3 md:gap-5">
      <div className="md:w-[280px] flex items-start pt-1 md:pt-3">
        <span className="text-lg md:text-xl font-semibold text-black">
          {label}
        </span>
        {required && (
          <span className="text-lg md:text-xl font-semibold text-black ml-1 -mt-0.5">
            *
          </span>
        )}
      </div>
      <div className="flex-1 text-black">
        {children}
        {description && (
          <p className="mt-1 text-sm md:text-base text-neutral-550 font-medium">
            {description}
          </p>
        )}
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
}
