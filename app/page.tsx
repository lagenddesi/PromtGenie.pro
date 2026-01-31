"use client";
import React, { useState, useEffect } from 'react';
import { Copy, Sparkles, Image as ImageIcon, Code, Search, Zap, CheckCircle } from 'lucide-react';

export default function AIPromptGenerator() {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('chatgpt');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  // SEO Keywords for Google
  const categories = [
    { id: 'chatgpt', name: 'ChatGPT & Writing', icon: <Sparkles size={18} /> },
    { id: 'midjourney', name: 'Midjourney & Art', icon: <ImageIcon size={18} /> },
    { id: 'coding', name: 'Coding & Dev', icon: <Code size={18} /> },
    { id: 'seo', name: 'SEO & Marketing', icon: <Search size={18} /> },
  ];

  const handleGenerate = () => {
    if (!input) return;
    
    let result = "";
    if (category === 'chatgpt') {
      result = `Act as an expert content creator. Task: ${input}. Instructions: Use a professional yet engaging tone, include data-driven insights, and format the output with clear headings and bullet points for better readability. Ensure the response is optimized for human engagement.`;
    } else if (category === 'midjourney') {
      result = `Hyper-realistic cinematic photography, ${input}, shot on 85mm lens, f/1.8, dramatic studio lighting, intricate details, 8k resolution, volumetric fog, Unreal Engine 5 render, highly detailed textures --ar 16:9 --v 6.0`;
    } else if (category === 'coding') {
      result = `Write clean, scalable, and well-documented code for: ${input}. Use modern best practices, implement error handling, include comments for complex logic, and ensure the code is optimized for performance.`;
    } else if (category === 'seo') {
      result = `Analyze the topic "${input}" and provide a high-ranking SEO strategy. Include a list of LSI keywords, a meta description (under 160 chars), and a structured content outline (H1, H2, H3) that targets high-intent search queries.`;
    }
    setOutput(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200">
      {/* --- NAV BAR --- */}
      <nav className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="text-white" size={20} fill="white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">PromptGenie<span className="text-blue-500">.ai</span></span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition">Tools</a>
            <a href="#" className="hover:text-white transition">Library</a>
            <a href="#" className="hover:text-white transition">Pricing</a>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full text-sm font-semibold transition">Login</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="max-w-4xl mx-auto pt-16 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Turn Simple Ideas Into <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Powerful AI Prompts</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          The #1 Free AI Prompt Generator for ChatGPT, Midjourney, and SEO. Stop struggling with bad results and start getting professional AI output.
        </p>
      </header>

      {/* --- MAIN TOOL --- */}
      <main className="max-w-3xl mx-auto px-4 pb-20">
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-3xl shadow-2xl backdrop-blur-sm">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  category === cat.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                  : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="relative group">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe what you want to create (e.g. 'A futuristic car in Mars' or 'How to grow a YouTube channel')"
              className="w-full h-40 bg-slate-900/50 border border-slate-700 rounded-2xl p-5 text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
            />
            <button
              onClick={handleGenerate}
              className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-transform active:scale-95"
            >
              Generate ✨
            </button>
          </div>

          {/* Output Area */}
          {output && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Optimized Prompt</span>
                <button 
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  {copied ? <CheckCircle size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  {copied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
              </div>
              <div className="bg-slate-950/80 border border-blue-500/30 p-6 rounded-2xl text-slate-300 italic leading-relaxed">
                "{output}"
              </div>
            </div>
          )}
        </div>

        {/* --- SEO CONTENT FOR GOOGLE VIEWS --- */}
        <article className="mt-24 prose prose-invert max-w-none border-t border-slate-800 pt-16">
          <h2 className="text-3xl font-bold text-white mb-8">How to use our Free AI Prompt Generator?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-slate-400">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">1. Select Your AI Model</h3>
              <p>Choose from ChatGPT for text, Midjourney for images, or our specialized SEO and Coding categories. Each model uses a different prompt engineering technique.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">2. Enter Your Basic Idea</h3>
              <p>Just type a simple sentence. Our AI Prompt Builder will automatically add technical parameters, lighting effects, and professional personas to it.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">3. Rank Higher with SEO Prompts</h3>
              <p>Using the SEO category, you can generate content structures that Google loves. It includes keyword placement and semantic structure for better ranking.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">4. High-Quality AI Art</h3>
              <p>For artists, our generator adds photography terms like 'Volumetric Lighting', '8k', and 'Unreal Engine' to ensure your AI art looks professional.</p>
            </div>
          </div>
        </article>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-4">Helping millions of creators master AI Prompt Engineering.</p>
          <div className="flex justify-center gap-6 text-xs text-slate-600 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Terms of Service</a>
            <a href="#" className="hover:text-blue-500">Contact Us</a>
          </div>
          <p className="mt-8 text-slate-700 text-xs">© 2024 PromptGenie AI. Created for SEO & Utility.</p>
        </div>
      </footer>
    </div>
  );
}
