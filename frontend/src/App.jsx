import { useState } from "react";
import axios from "axios";

function App() {
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("");
  const [platform, setPlatform] = useState("");
  const [length, setLength] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);
const [displayedScript, setDisplayedScript] = useState("");
  const generateScript = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "https://viral-script-generator-a83t.onrender.com/api/generate-script",
        {
          topic,
          audience,
          platform,
          length,
        }
      );

  
      const generatedText = response.data.script;

setScript(generatedText);
setDisplayedScript("");

let index = 0;

const interval = setInterval(() => {
  index += 20;

  setDisplayedScript(
    generatedText.slice(0, index)
  );

  if (index >= generatedText.length) {
    clearInterval(interval);
  }
}, 15);
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-violet-600/10 blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

        <section className="relative max-w-5xl mx-auto px-6 py-28 text-center">

          <h1
            className="
            text-7xl
            font-extrabold
            tracking-tight
            bg-gradient-to-r
            from-white
            to-zinc-400
            bg-clip-text
            text-transparent
            mb-6
            "
          >
            Viral Script AI
          </h1>

          <h2 className="text-3xl font-semibold text-white mb-6">
            Create Viral Scripts in Minutes, Not Hours
          </h2>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-8">
            Turn ideas into high-retention content using audience psychology,
            storytelling frameworks, and AI-powered script generation.
          </p>

          <button
            className="
            mt-10
            px-8
            py-4
            rounded-lg
            font-medium
            bg-gradient-to-r
            from-violet-600
            to-indigo-600
            hover:from-violet-500
            hover:to-indigo-500
            transition
            duration-300
            "
          >
            Generate Script
          </button>

          {/* Trust Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-4">

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
              Psychology
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
              Packaging
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
              Outline
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
              Retention
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
              CTA
            </div>

          </div>

        </section>

      </div>
{/* Why Creators Struggle */}

<section className="max-w-6xl mx-auto px-6 py-24">

  <div className="text-center mb-16">

    <h2 className="text-4xl font-bold mb-4">
      Why Creators Struggle
    </h2>

    <p className="text-zinc-400 max-w-2xl mx-auto">
      Creating engaging content consistently is difficult without
      a proven system and repeatable process.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-3">
        Time Consuming
      </h3>

      <p className="text-zinc-400">
        Hours spent researching, planning, scripting, and editing
        content from scratch.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-3">
        Low Engagement
      </h3>

      <p className="text-zinc-400">
        Good ideas often fail because they lack structure,
        hooks, and retention strategies.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-3">
        Creative Burnout
      </h3>

      <p className="text-zinc-400">
        Constant pressure to generate fresh content ideas
        can quickly become exhausting.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-3">
        No Proven Framework
      </h3>

      <p className="text-zinc-400">
        Most creators rely on guesswork instead of a
        repeatable content system.
      </p>
    </div>

  </div>
  {/* How Viral Script AI Solves This */}

<section className="max-w-6xl mx-auto px-6 py-24">

  <div className="text-center mb-16">

    <h2 className="text-4xl font-bold mb-4">
      How Viral Script AI Solves This
    </h2>

    <p className="text-zinc-400 max-w-2xl mx-auto">
      Instead of guessing what works, Viral Script AI follows
      a proven framework used by successful creators to maximize
      retention and engagement.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-3">
        Psychology
      </h3>

      <p className="text-zinc-400 text-sm">
        Identify audience pain points, curiosity triggers,
        and emotional drivers.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-3">
        Packaging
      </h3>

      <p className="text-zinc-400 text-sm">
        Generate compelling titles, thumbnails,
        and hooks that attract clicks.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-3">
        Outline
      </h3>

      <p className="text-zinc-400 text-sm">
        Build a structured What, Why, and How
        flow before writing.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-3">
        Intro
      </h3>

      <p className="text-zinc-400 text-sm">
        Create context, challenge assumptions,
        and establish credibility.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-3">
        Body & CTA
      </h3>

      <p className="text-zinc-400 text-sm">
        Deliver value while naturally leading
        viewers toward action.
      </p>
    </div>

  </div>

</section>

</section>
{/* The Viral Script Framework */}

<section className="max-w-5xl mx-auto px-6 py-18">

  <div className="text-center mb-16">

    <h2 className="text-4xl font-bold mb-4">
      The Viral Script Framework
    </h2>

    <p className="text-zinc-400 max-w-2xl mx-auto">
      Every script is generated using a structured framework
      designed to improve retention, engagement, and clarity.
    </p>

  </div>

  <div className="space-y-6">

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">
        1. Psychology
      </h3>

      <p className="text-zinc-400">
        Discover audience pain points, curiosity gaps,
        and expectation-versus-reality moments.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">
        2. Packaging
      </h3>

      <p className="text-zinc-400">
        Generate strong titles, thumbnail concepts,
        and core content ideas.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">
        3. Outline
      </h3>

      <p className="text-zinc-400">
        Create a logical structure using What, Why,
        and How to improve content flow.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">
        4. Intro
      </h3>

      <p className="text-zinc-400">
        Hook viewers using context, proof,
        contrast, and a clear promise.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">
        5. Body & Outro
      </h3>

      <p className="text-zinc-400">
        Deliver value, maintain attention,
        and finish with a compelling call to action.
      </p>
    </div>

  </div>

</section>
{/* How It Works */}

<section className="max-w-6xl mx-auto px-6 py-24">

  <div className="text-center mb-16">

    <h2 className="text-4xl font-bold mb-4">
      How It Works
    </h2>

    <p className="text-zinc-400 max-w-2xl mx-auto">
      Generate high-retention scripts in three simple steps.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
      <div className="text-violet-500 text-4xl font-bold mb-4">
        01
      </div>

      <h3 className="text-xl font-semibold mb-3">
        Define Your Content
      </h3>

      <p className="text-zinc-400">
        Enter your topic, audience, platform,
        and desired content length.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
      <div className="text-violet-500 text-4xl font-bold mb-4">
        02
      </div>

      <h3 className="text-xl font-semibold mb-3">
        Generate Script
      </h3>

      <p className="text-zinc-400">
        AI applies psychology, packaging,
        outlines, and storytelling frameworks.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
      <div className="text-violet-500 text-4xl font-bold mb-4">
        03
      </div>

      <h3 className="text-xl font-semibold mb-3">
        Publish & Grow
      </h3>

      <p className="text-zinc-400">
        Copy the script, create content,
        and increase engagement faster.
      </p>
    </div>

  </div>

</section>
{/* Script Generator */}

<section className="max-w-5xl mx-auto px-6 py-24">

  <div className="text-center mb-12">

    <h2 className="text-4xl font-bold mb-4">
      Ready to Generate Your Script?
    </h2>

    <p className="text-zinc-400">
      Enter your content details and let AI build a
      high-retention script for you.
    </p>

  </div>

  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">

    <div className="grid md:grid-cols-2 gap-6">

      <div>
        <label className="block mb-2 text-zinc-300">
          Topic
        </label>

        <input
          type="text"
          placeholder="Enter your topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white"
        />
      </div>

      <div>
        <label className="block mb-2 text-zinc-300">
          Audience
        </label>

        <input
          type="text"
          placeholder="College Students"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white"
        />
      </div>

      <div>
        <label className="block mb-2 text-zinc-300">
          Platform
        </label>

        <input
          type="text"
          placeholder="YouTube"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white"
        />
      </div>

      <div>
        <label className="block mb-2 text-zinc-300">
          Length
        </label>

        <input
          type="text"
          placeholder="5 Minutes"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white"
        />
      </div>

    </div>

    <button
      onClick={generateScript}
      disabled={loading}
      className="
      w-full
      mt-8
      py-4
      rounded-xl
      bg-violet-600
      hover:bg-violet-700
      transition
      font-semibold
      "
    >
      {loading ? "Generating..." : "Generate Script"}
    </button>

  </div>

</section>
{/* Generated Script */}

{script && (
  <section className="max-w-5xl mx-auto px-6 pb-24">

    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Generated Script
        </h2>

        <button
          onClick={() => navigator.clipboard.writeText(script)}
          className="
          bg-violet-600
          hover:bg-violet-700
          px-4
          py-2
          rounded-lg
          transition
          "
        >
          Copy Script
        </button>

      </div>

      <div className="space-y-6">

        <div className="bg-violet-950/20 border border-violet-800 rounded-xl p-5">
          <h3 className="text-violet-400 text-xl font-bold mb-3">
            Psychology
          </h3>
<div
  className="whitespace-pre-wrap text-zinc-300 leading-8"
  dangerouslySetInnerHTML={{
    __html: displayedScript
      .replace(/Psychology/g, '<span class="text-violet-400 font-bold text-xl">Psychology</span>')
      .replace(/Packaging/g, '<span class="text-violet-400 font-bold text-xl">Packaging</span>')
      .replace(/Outline/g, '<span class="text-violet-400 font-bold text-xl">Outline</span>')
      .replace(/Intro/g, '<span class="text-violet-400 font-bold text-xl">Intro</span>')
      .replace(/Body/g, '<span class="text-violet-400 font-bold text-xl">Body</span>')
      .replace(/CTA/g, '<span class="text-violet-400 font-bold text-xl">CTA</span>')
      .replace(/\n/g, "<br>")
      
  }}
/>
         
        </div>

      </div>

    </div>

  </section>
)}
    </div>
  );
}

export default App;