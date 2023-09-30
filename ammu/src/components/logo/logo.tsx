import { component$ } from "@builder.io/qwik";

export const Logo = component$(() => {
  return (
    <div>
      <a href="https://qwik.builder.io/">
        <img
          alt="Mia Logo"
          width={400}
          height={167}
          src="https://filmdaily.co/wp-content/uploads/2020/09/mia-lede-2.jpg" 
        />
      </a>
    </div>
  );
});
