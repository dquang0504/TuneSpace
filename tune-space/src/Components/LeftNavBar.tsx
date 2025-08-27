import { Home, Search, Library, PlusCircle } from "lucide-react"

const LeftNavBar = () => {
    return (
        <div className="w-64 h-screen bg-[#0D1B2A] text-[#14B8A6] flex flex-col shadow-xl">
            {/* Navigation */}
            <nav className="mt-4 px-4 space-y-3">
                <a
                    href="#"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#14B8A620] transition"
                >
                    <Home size={20} />
                    <span>Home</span>
                </a>
                <a
                    href="#"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#14B8A620] transition"
                >
                    <Library size={20} />
                    <span>Your Library</span>
                </a>
            </nav>

            {/* Divider */}
            <div className="my-4 border-t border-[#14B8A650]" />

            {/* Library Section */}
            <div className="flex-1 px-4 space-y-4 overflow-y-auto">
                <div className="bg-[#1e2e46] rounded-xl p-4">
                    <h3 className="font-semibold">Create your first playlist</h3>
                    <p className="text-sm text-gray-300">It’s easy, we’ll help you</p>
                    <button className="mt-3 bg-[#14B8A6] text-black px-4 py-1 rounded-full text-sm hover:scale-105 transition">
                        Create playlist
                    </button>
                </div>

                <div className="bg-[#1e2e46] rounded-xl p-4">
                    <h3 className="font-semibold">Find some podcasts</h3>
                    <p className="text-sm text-gray-300">Stay updated with new episodes</p>
                    <button className="mt-3 bg-[#14B8A6] text-black px-4 py-1 rounded-full text-sm hover:scale-105 transition">
                        Browse podcasts
                    </button>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="p-4">
                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-[#14B8A620] transition">
                    <PlusCircle size={18} />
                    <span>Create Playlist</span>
                </button>
            </div>
        </div>
    );
};

export default LeftNavBar;