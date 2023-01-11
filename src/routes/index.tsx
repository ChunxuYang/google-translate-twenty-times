import { createSignal } from "solid-js";
import StartTranslation from "~/components/StartTranslation";
import TextInput from "~/components/TextInput";
import TimesSlider from "~/components/TimesSlider";

export default function Home() {
  const [times, setTimes] = createSignal(20);
  const [originalText, setOriginalText] = createSignal("");
  const [result, setResult] = createSignal("");
  const [randomLanguage, setRandomLanguage] = createSignal(true);
  return (
    <main class="container mx-auto text-gray-700 p-4 flex flex-col w-screen h-screen">
      <h1 class="max-sm text-5xl text-sky-700 my-12 mx-auto text-center">
        谷歌翻译20次
      </h1>
      <div class="sm:flex gap-2 justify-between w-full">
        <TimesSlider times={times} setTimes={setTimes} />
        <StartTranslation
          times={times()}
          text={originalText()}
          randomLanguage={randomLanguage()}
          setResult={setResult}
        />
        <label class="flex items-center">
          <input
            type="checkbox"
            class="form-checkbox w-4 h-4"
            value={randomLanguage() as any}
            onInput={(e) => setRandomLanguage(e.currentTarget.checked)}
          />

          <span class="ml-2 text-2xl text-gray-700">随机语言</span>
        </label>
      </div>
      <div class="w-full flex flex-col sm:flex-row gap-2 flex-1">
        <div class="w-full sm:w-1/2 flex-1">
          <TextInput
            title="原文"
            text={originalText}
            setText={setOriginalText}
          />
        </div>

        <div class="w-full sm:w-1/2 flex-1">
          <TextInput
            title="翻译后"
            text={result}
            setText={setResult}
            disabled={result.length === 0}
          />
        </div>
      </div>
    </main>
  );
}
