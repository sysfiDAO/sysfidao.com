import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Book,
  Search,
  ExternalLink,
  Lightbulb,
  AlertCircle,
  Menu,
  X,
} from "lucide-react";
import {
  documentationData,
  getAllTopics,
  getTopicById,
} from "./documentationData";

const Documentation = () => {
  const [activeTopic, setActiveTopic] = useState("launch-dao");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const currentTopic = getTopicById(activeTopic);
  const allTopics = getAllTopics();

  // Handle mobile sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarExpanded(false);
      } else {
        setIsSidebarExpanded(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter topics based on search
  const filteredSections = documentationData.sections
    .map((section) => ({
      ...section,
      topics: section.topics.filter((topic) =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((section) => section.topics.length > 0);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50  pt-5">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-1 rounded-lg backdrop-blur-xl "
        >
          {isMobileSidebarOpen ? (
            <X className="w-6 h-6 text-green-400" />
          ) : (
            <Menu className="w-6 h-6 text-green-400" />
          )}
        </motion.button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          <motion.aside
            initial={false}
            animate={{
              width: isSidebarExpanded
                ? window.innerWidth < 1024
                  ? "80%"
                  : "320px"
                : window.innerWidth < 1024
                  ? "20%"
                  : "80px",
            }}
            className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border-r border-white/10 z-40 transition-all duration-300 ${
              isMobileSidebarOpen || window.innerWidth >= 1024
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }`}
            style={{
              minWidth: isSidebarExpanded
                ? window.innerWidth < 1024
                  ? "80%"
                  : "320px"
                : window.innerWidth < 1024
                  ? "20%"
                  : "80px",
            }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-4 lg:p-6 border-b border-white/10">
                {isSidebarExpanded ? (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                        <Book className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2
                          className="text-xl font-bold text-white"
                          style={{ fontFamily: '"Orbitron", sans-serif' }}
                        >
                          Docs
                        </h2>
                        <p
                          className="text-xs text-gray-400"
                          style={{ fontFamily: '"Space Mono", monospace' }}
                        >
                          Sysfi Nexus
                        </p>
                      </div>
                    </div>

                    {/* Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search docs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <Book className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto p-4 lg:p-6 custom-scrollbar">
                {isSidebarExpanded ? (
                  <div className="space-y-6">
                    {filteredSections.map((section) => (
                      <div key={section.id}>
                        <div className="flex items-center gap-2 mb-3">
                          <section.icon className="w-4 h-4 text-green-400" />
                          <h3
                            className="text-xs font-bold text-gray-400 uppercase tracking-wider"
                            style={{ fontFamily: '"Space Mono", monospace' }}
                          >
                            {section.title}
                          </h3>
                        </div>
                        <div className="space-y-1">
                          {section.topics.map((topic) => (
                            <motion.button
                              key={topic.id}
                              whileHover={{ x: 4 }}
                              onClick={() => {
                                setActiveTopic(topic.id);
                                setIsMobileSidebarOpen(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                                activeTopic === topic.id
                                  ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400"
                                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              <topic.icon className="w-4 h-4 flex-shrink-0" />
                              <span
                                className="text-sm"
                                style={{
                                  fontFamily: '"Space Mono", monospace',
                                }}
                              >
                                {topic.title}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {documentationData.sections.map((section) => (
                      <div key={section.id} className="space-y-2">
                        {section.topics.map((topic) => (
                          <motion.button
                            key={topic.id}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setActiveTopic(topic.id)}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                              activeTopic === topic.id
                                ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
                                : "hover:bg-white/5"
                            }`}
                            title={topic.title}
                          >
                            <topic.icon
                              className={`w-5 h-5 ${
                                activeTopic === topic.id
                                  ? "text-green-400"
                                  : "text-gray-400"
                              }`}
                            />
                          </motion.button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </nav>

              {/* Toggle Button */}
              <div className="p-4 border-t border-white/10 hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                  className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  {isSidebarExpanded ? (
                    <>
                      <ChevronLeft className="w-4 h-4" />
                      <span
                        className="text-sm"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        Collapse
                      </span>
                    </>
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.aside>
        </AnimatePresence>

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300`}
          style={{
            marginLeft: isSidebarExpanded
              ? window.innerWidth < 1024
                ? "0"
                : "320px"
              : window.innerWidth < 1024
                ? "0"
                : "80px",
          }}
        >
          <div className="min-h-screen bg-gradient-to-b from-black via-gray-900/50 to-black">
            {/* Background Pattern */}
            <div className="fixed inset-0 opacity-5 pointer-events-none">
              <svg className="w-full h-full">
                <defs>
                  <pattern
                    id="docsPattern"
                    x="0"
                    y="0"
                    width="100"
                    height="86.6"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M50 0L93.3 25v50L50 100L6.7 75V25z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-green-500"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#docsPattern)" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
              {currentTopic && (
                <motion.div
                  key={activeTopic}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Breadcrumb */}
                  <div
                    className="flex items-center gap-2 text-sm text-gray-400 mb-8"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    <span>{currentTopic.sectionTitle}</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-green-400">{currentTopic.title}</span>
                  </div>

                  {/* Page Header */}
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                        <currentTopic.icon className="w-8 h-8 text-green-400" />
                      </div>
                      <h1
                        className="text-4xl md:text-5xl font-bold"
                        style={{ fontFamily: '"Orbitron", sans-serif' }}
                      >
                        {currentTopic.title}
                      </h1>
                    </div>
                    <p
                      className="text-lg text-gray-400 leading-relaxed"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      {currentTopic.content.introduction}
                    </p>
                  </div>

                  {/* Content Sections */}
                  <div className="space-y-12">
                    {currentTopic.content.sections.map(
                      (section, sectionIndex) => (
                        <motion.div
                          key={sectionIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: sectionIndex * 0.1 }}
                          className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300"
                        >
                          {/* Section Header */}
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                              <section.icon className="w-6 h-6 text-green-400" />
                            </div>
                            <h2
                              className="text-2xl md:text-3xl font-bold"
                              style={{ fontFamily: '"Orbitron", sans-serif' }}
                            >
                              {section.title}
                            </h2>
                          </div>

                          {/* Steps */}
                          <div className="space-y-6">
                            {section.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="relative pl-8">
                                {/* Step Number */}
                                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                                  {stepIndex + 1}
                                </div>

                                {/* Step Content */}
                                <div>
                                  <h3
                                    className="text-lg font-bold text-white mb-2"
                                    style={{
                                      fontFamily: '"Orbitron", sans-serif',
                                    }}
                                  >
                                    {step.label}
                                  </h3>
                                  <p
                                    className="text-gray-400 leading-relaxed mb-3"
                                    style={{
                                      fontFamily: '"Space Mono", monospace',
                                    }}
                                  >
                                    {step.description}
                                  </p>

                                  {/* Tip */}
                                  {step.tip && (
                                    <div className="flex items-start gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                                      <Lightbulb className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      <p
                                        className="text-sm text-green-400"
                                        style={{
                                          fontFamily: '"Space Mono", monospace',
                                        }}
                                      >
                                        <strong>Tip:</strong> {step.tip}
                                      </p>
                                    </div>
                                  )}

                                  {/* Options */}
                                  {step.options && (
                                    <div className="mt-3 space-y-2">
                                      {step.options.map(
                                        (option, optionIndex) => (
                                          <div
                                            key={optionIndex}
                                            className="p-3 bg-white/5 border border-white/10 rounded-lg"
                                          >
                                            <p
                                              className="font-bold text-white mb-1"
                                              style={{
                                                fontFamily:
                                                  '"Orbitron", sans-serif',
                                              }}
                                            >
                                              {option.value}
                                            </p>
                                            <p
                                              className="text-sm text-gray-400"
                                              style={{
                                                fontFamily:
                                                  '"Space Mono", monospace',
                                              }}
                                            >
                                              {option.description}
                                            </p>
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Section Action */}
                          {section.action && (
                            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                              <p
                                className="text-blue-400"
                                style={{
                                  fontFamily: '"Space Mono", monospace',
                                }}
                              >
                                {section.action}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      ),
                    )}
                  </div>

                  {/* Summary */}
                  {currentTopic.content.summary && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-12 p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                          <Book className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3
                            className="text-xl font-bold text-white mb-2"
                            style={{ fontFamily: '"Orbitron", sans-serif' }}
                          >
                            Summary
                          </h3>
                          <p
                            className="text-gray-300 leading-relaxed"
                            style={{ fontFamily: '"Space Mono", monospace' }}
                          >
                            {currentTopic.content.summary}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Footer */}
                  <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/10">
                    <div
                      className="text-sm text-gray-500"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      Was this helpful?
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        Yes
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        No
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 197, 94, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Documentation;
