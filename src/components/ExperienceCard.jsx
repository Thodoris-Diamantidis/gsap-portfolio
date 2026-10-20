function ExperienceCard({role, company, context, website, period, highlights}) {
    return (
        <article className="p-6 lg:p-8 border border-amber-300/20 rounded-xl bg-white/[0.02]">
            <header>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                    <h3 className="text-xl lg:text-2xl font-semibold">
                        {role} <span className="text-amber-200 font-medium">—&nbsp;{company}</span>
                    </h3>
                    <p className="text-sm lg:text-base text-gray-400 shrink-0">{period}</p>
                </div>
                <p className="mt-1 text-gray-400">
                    {context}
                    {website && (
                        <>
                            {" · "}
                            <a href={`https://${website}`}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="underline decoration-amber-300/40 underline-offset-4 hover:text-amber-300 focus-visible:text-amber-300 transition-colors">
                                {website}
                            </a>
                        </>
                    )}
                </p>
            </header>
            <ul className="mt-5 space-y-2 list-disc pl-5 text-gray-300 leading-relaxed marker:text-amber-300/70">
                {highlights.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    )
}

export default ExperienceCard
