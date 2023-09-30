import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  return (
    <div>
      <h1>Amudha is a fuqin whore</h1>
      <b>This app under development</b>
      <p>Count: {count.value}{count.value}</p>
      <p>
        <button onClick$={() => count.value++}>Increment</button>
      </p>
      <h3>Men are Brave</h3>
    </div>
  );
});
