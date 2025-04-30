interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="px-3 py-1 text-sm text-muted-foreground border border-border/50 mr-2 mb-2 inline-block">
      {name}
    </span>
  )
}
