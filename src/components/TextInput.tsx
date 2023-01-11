import { Accessor, Setter } from "solid-js";

interface TextInputProps {
  title: string;
  text: Accessor<string>;
  setText: Setter<string>;
  disabled?: boolean;
}

export default function TextInput({
  text,
  setText,
  title,
  disabled,
}: TextInputProps) {
  if (!disabled) {
    disabled = false;
  }
  return (
    <div class="flex flex-col text-left h-full">
      <span class="text-2xl text-gray-700 p-2">{title}</span>
      {/* multiple lines */}
      <textarea
        class="flex-1 border border-gray-300 rounded-lg p-2"
        rows={5}
        value={text()}
        disabled={disabled}
        onInput={(e) => setText(e.currentTarget.value)}
      />
    </div>
  );
}
