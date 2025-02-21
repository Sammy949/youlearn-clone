import { Input } from "@/components/ui/input";
import { Paperclip, AudioLines, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col mt-10 ">
      <h2 className="text-4xl mb-12">What do you want to learn today?</h2>

      <div className="w-[750px] bg-[#141414] p-5 rounded-2xl border border-slate-100/10">
        <Input
          className="placeholder:text-base bg-transparent mb-1 p-0 placeholder:m-0 placeholder:p-0 outline-none border-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-transparent"
          placeholder="Upload file, paste YouTube video, or record a lecture"
        />

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Paperclip className="w-5 h-5 text-gray-500" />
            <AudioLines className="w-5 h-5 text-gray-500" />
          </div>

          <ArrowRight className="w-8 h-8 bg-white p-2 rounded-md text-black" />
        </div>
      </div>
    </div>
  );
}
