export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[120px]" />
      <div className="absolute top-[40%] left-[-5%] w-[600px] h-[600px] rounded-full bg-pink-600/10 blur-[150px]" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[130px]" />
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
    </div>
  )
}
