function ProjectCard({index, name, label, period, summary, highlights, tech, links, note}) {
    return (
        <article className="w-full h-full grid content-start lg:content-stretch gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12 p-6 lg:p-10 border border-amber-300/20 rounded-xl bg-white/[0.02]">
            {/* Overview: what it is and where to see it */}
            <div className="flex flex-col gap-3">
                <p className="text-sm text-gray-400">
                    <span className="text-amber-300 font-semibold tabular-nums mr-2">{String(index + 1).padStart(2, "0")}</span>
                    {label}
                </p>
                <h3 className="text-2xl lg:text-3xl font-semibold">{name}</h3>
                {period && <p className="text-sm text-gray-400">{period}</p>}
                <p className="text-lg text-gray-200 leading-relaxed">{summary}</p>

                <div className="mt-2 lg:mt-auto lg:pt-4 flex flex-wrap gap-4">
                    {links.map(({label: linkLabel, href, icon: Icon}) => (
                        <a key={href}
                           href={href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 font-medium text-amber-200 underline decoration-amber-300/40 underline-offset-4 hover:text-amber-300 focus-visible:text-amber-300 transition-colors">
                            <Icon className="w-4 h-4" aria-hidden="true"/>
                            {linkLabel}
                            <span className="sr-only">for {name} (opens in a new tab)</span>
                        </a>
                    ))}
                    {note && <p className="text-sm italic text-gray-400">{note}</p>}
                </div>
            </div>

            {/* Detail: contribution, then stack */}
            <div className="flex flex-col gap-6">
                {highlights.length > 0 && (
                    // Hidden on pinned phones: a pinned card has to fit one screen, and the summary carries the story.
                    <div className="max-md:pinned:hidden">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200/80">What I built</h4>
                        <ul className="mt-3 space-y-2 list-disc pl-5 text-gray-300 leading-relaxed marker:text-amber-300/70">
                            {highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <ul className="flex flex-wrap gap-2 lg:mt-auto" aria-label={`${name} tech stack`}>
                    {tech.map((item) => (
                        <li key={item} className="px-3 py-1 rounded-full border border-amber-300/30 bg-amber-300/10 text-sm text-amber-100">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ProjectCard
