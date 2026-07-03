import { GlowPanel } from "./glow-panel";

export default function AboutSection() {
   return (
      <GlowPanel
         as="section"
         id="about"
         background="gradient"
         border="animated"
         glow
         className="flex flex-col lg:flex-row gap-4 items-center min-h-30 p-6"
      >
         <div className="flex justify-center items-center aspect-2/3 w-full lg:w-80 shrink-0 rounded-lg bg-linear-to-b from-accent-blue/40 to-surface">
            Author Image
         </div>
         <p className="lg:max-w-1/2 text-sm text-white py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
         </p>
      </GlowPanel>
   )
}