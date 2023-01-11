import { Accessor, createSignal, Setter } from "solid-js";

interface StartTranslationProps {
  text: string;
  randomLanguage: boolean;
  times: number;
  setResult: Setter<string>;
}

async function translate(
  text: string,
  randomLanguage: boolean
): Promise<string> {
  // return after 700ms
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, 700);
  });
}

export default function StartTranslation({
  text,
  randomLanguage,
  times,
  setResult,
}: StartTranslationProps) {
  const [progress, setProgress] = createSignal(-1);
  const [error, setError] = createSignal("");

  function startTranslation() {
    setProgress(0);
    setError("");
    for (let i = 0; i < times; i++) {
      translate(text, randomLanguage)
        .then((result) => {
          setResult(result);
          setProgress(i + 1);
        })
        .catch(() => {
          setError("翻译失败");
        });
    }
  }

  return (
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={startTranslation}
      >
        {progress() === -1 ? "开始翻译" : `翻译中 ${progress()}/${times}...`}
      </button>
    </div>
  );
}
