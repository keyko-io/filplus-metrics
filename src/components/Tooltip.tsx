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
      <div className="hidden group-hover:block absolute bg-gray-800 bg-opacity-70 text-white text-xs px-3 py-2 rounded-sm -right-20 top-10">
        <div className="min-w-[14rem]">{text}</div>
      </div>
    </div>
  )
}

export default Tooltip
