import { Accessor, createSignal, Setter } from "solid-js";

interface TimesSliderProps {
  times: Accessor<number>;
  setTimes: Setter<number>;
}

export default function TimesSlider({ times, setTimes }: TimesSliderProps) {
  return (
    <div class="flex flex-col">
      <span class="text-2xl text-gray-700 p-2">
        翻译
        {
          <input
            type="text"
            class="text-center mx-1 w-12 border border-gray-400 rounded-lg"
            value={times()}
            onInput={(e) => {
              const value = parseInt(e.currentTarget.value);

              // 1 <= value <= 40
              if (value > 0 && value <= 40) {
                setTimes(value);
              } else if (value > 40) {
                setTimes(40);
              } else {
                setTimes(1);
              }
            }}
          />
        }
        次
      </span>
    </div>
  );
}
