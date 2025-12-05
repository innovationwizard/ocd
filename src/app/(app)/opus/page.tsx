"use client"

import { useEffect, useState, useMemo } from "react"
import { BookOpen, Calendar, Search, Sparkles, Zap, Settings } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { OpusCrudModal } from "@/components/opus-crud-modal"

interface OpusTypeConfig {
  key: string
  label: string
  icon: string
  color: string
  textColor: string
}

interface Opus {
  id: string
  name: string
  content: string
  raisonDetre: string
  opusType: string
  isStrategic: boolean
  isDynamic: boolean
  createdAt: string
  updatedAt: string
  _count: {
    items: number
  }
}

export default function OpusPage() {
  const [opuses, setOpuses] = useState<Opus[]>([])
  const [typeConfigs, setTypeConfigs] = useState<OpusTypeConfig[]>([])
  const [selected, setSelected] = useState<Opus | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    void loadOpuses()
    void loadTypeConfigs()
  }, [selectedTypeFilter])

  async function loadOpuses() {
    setLoading(true)
    try {
      const url = selectedTypeFilter
        ? `/api/opuses?opusType=${selectedTypeFilter}`
        : "/api/opuses"
      const response = await fetch(url, { cache: "no-store" })
      if (!response.ok) throw new Error("Failed to load opuses")
      const data: Opus[] = await response.json()
      setOpuses(data)
      // Auto-select first opus if none selected
      if (!selected && data.length > 0) {
        setSelected(data[0])
      }
    } catch (error) {
      console.error("Failed to load opuses:", error)
    } finally {
      setLoading(false)
    }
  }

  async function loadTypeConfigs() {
    try {
      const response = await fetch("/api/opus-types")
      if (!response.ok) throw new Error("Failed to fetch type configs")
      const data: OpusTypeConfig[] = await response.json()
      setTypeConfigs(data)
    } catch (error) {
      console.error("Failed to fetch opus type configs:", error)
    }
  }

  function getTypeConfig(typeKey: string): OpusTypeConfig | null {
    return typeConfigs.find(t => t.key === typeKey) || null
  }

  function getIconComponent(iconName: string) {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.FolderKanban
    return IconComponent
  }

  const filteredOpuses = useMemo(() => {
    let filtered = opuses

    // Filter by type
    if (selectedTypeFilter) {
      filtered = filtered.filter(opus => opus.opusType === selectedTypeFilter)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(opus => {
        const typeConfig = getTypeConfig(opus.opusType)
        return (
          opus.name.toLowerCase().includes(query) ||
          opus.content.toLowerCase().includes(query) ||
          (opus.raisonDetre && opus.raisonDetre.toLowerCase().includes(query)) ||
          (typeConfig && typeConfig.label.toLowerCase().includes(query))
        )
      })
    }

    return filtered
  }, [opuses, selectedTypeFilter, searchQuery, typeConfigs])

  if (loading) {
    return (
      <div className="px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12 text-slate-500">
            Loading opuses...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-8 py-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Corpus</h1>
            <p className="mt-2 text-sm text-slate-500">
              Your complete collection of opuses
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            Manage Opuses
          </button>
        </header>

        {/* Filters and Search */}
        <div className="space-y-3">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedTypeFilter(null)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md ${
                selectedTypeFilter === null
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Types
            </button>
            {typeConfigs.map((typeConfig) => {
              const Icon = getIconComponent(typeConfig.icon)
              return (
                <button
                  key={typeConfig.key}
                  onClick={() => setSelectedTypeFilter(typeConfig.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md flex items-center gap-1.5 ${
                    selectedTypeFilter === typeConfig.key
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {typeConfig.label}
                </button>
              )
            })}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search opuses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
        </div>

        {/* Opus List */}
        {filteredOpuses.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600 font-medium mb-1">
              {searchQuery || selectedTypeFilter ? "No opuses match your filters." : "No opuses yet."}
            </p>
            <p className="text-sm text-slate-500">
              {searchQuery || selectedTypeFilter
                ? "Try adjusting your search or filters."
                : "Create your first opus to get started."}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
            <aside className="space-y-2">
              {filteredOpuses.map((opus) => {
                const typeConfig = getTypeConfig(opus.opusType)
                if (!typeConfig) return null
                const Icon = getIconComponent(typeConfig.icon)
                return (
                  <button
                    key={opus.id}
                    onClick={() => setSelected(opus)}
                    className={[
                      "w-full rounded-md border px-4 py-3 text-left text-sm shadow-sm transition-colors",
                      selected?.id === opus.id
                        ? "border-slate-400 bg-slate-100 text-slate-900"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900"
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 ${typeConfig.color} ${typeConfig.textColor}`}>
                        <Icon className="w-3 h-3" />
                        {typeConfig.label}
                      </div>
                      {opus.isStrategic && (
                        <span className="px-1.5 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700">
                          <Sparkles className="w-3 h-3 inline" />
                        </span>
                      )}
                      {opus.isDynamic && (
                        <span className="px-1.5 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-700">
                          <Zap className="w-3 h-3 inline" />
                        </span>
                      )}
                    </div>
                    <div className="font-medium">{opus.name}</div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="h-3 w-3" />
                      {new Date(opus.createdAt).toLocaleDateString()}
                      {opus._count.items > 0 && (
                        <span className="ml-2">• {opus._count.items} item(s)</span>
                      )}
                    </div>
                  </button>
                )
              })}
            </aside>

            <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
              {selected ? (
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {(() => {
                          const typeConfig = getTypeConfig(selected.opusType)
                          if (!typeConfig) return null
                          const Icon = getIconComponent(typeConfig.icon)
                          return (
                            <div className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 ${typeConfig.color} ${typeConfig.textColor}`}>
                              <Icon className="w-3 h-3" />
                              {typeConfig.label}
                            </div>
                          )
                        })()}
                        {selected.isStrategic && (
                          <span className="px-2 py-1 rounded text-xs font-medium bg-purple-100 text-purple-700 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Strategic
                          </span>
                        )}
                        {selected.isDynamic && (
                          <span className="px-2 py-1 rounded text-xs font-medium bg-amber-100 text-amber-700 flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            Dynamic
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                        {selected.name}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <span>
                          Created {new Date(selected.createdAt).toLocaleDateString()}
                        </span>
                        {selected.updatedAt !== selected.createdAt && (
                          <span>
                            Updated {new Date(selected.updatedAt).toLocaleDateString()}
                          </span>
                        )}
                        {selected._count.items > 0 && (
                          <span>• {selected._count.items} item(s)</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {selected.raisonDetre && (
                    <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
                      <div className="text-xs font-medium text-amber-900 mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Raison d'être
                      </div>
                      <p className="text-sm text-amber-800">{selected.raisonDetre}</p>
                    </div>
                  )}

                  {selected.content ? (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-slate-700">Content</h3>
                      <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
                        <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
                          {selected.content}
                        </pre>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center text-slate-500 border border-dashed border-slate-300 rounded-md">
                      <p className="text-sm">No content yet.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-12 text-center text-slate-500">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                  <p className="text-sm">Select an opus to view details</p>
                </div>
              )}
            </section>
          </div>
        )}
      </div>

      <OpusCrudModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
          void loadOpuses()
        }}
      />
    </div>
  )
}

