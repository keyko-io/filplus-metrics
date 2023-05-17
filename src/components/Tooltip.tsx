const Tooltip = ({
  text,
  children,
}: {
  text: string
  children: React.ReactNode
}) => {
  return (
    <div className="relative group">
      {children}
      <div className="hidden group-hover:block absolute bg-gray-500 text-white text-xs px-3 py-2 rounded-md right-1/4">
        <div className="min-w-[10rem]">{text}</div>
      </div>
    </div>
  )
}

export default Tooltip
