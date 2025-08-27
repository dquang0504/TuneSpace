import { Pause, Play, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react';
import React, { useRef, useState } from 'react';
import starboy from '../assets/audio/starboy.mp3'

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Toggle play/pause
    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Update progress when playing
    const handleTimeUpdate = () => {
        if (!audioRef.current) return;
        setProgress(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    // Seek
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = Number(e.target.value);
        setProgress(Number(e.target.value));
    };

    // Format time mm:ss
    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="flex h-screen bg-gradient-to-b from-[#121212] to-black text-white">
            {/* Main Content */}
            <div className="flex-1 p-8 overflow-y-auto">
                {/* Song Info */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src="https://source.unsplash.com/400x400/?music,album"
                        alt="Album Cover"
                        className="w-64 h-64 rounded-2xl shadow-2xl mb-6"
                    />
                    <h1 className="text-3xl font-bold">Blinding Lights</h1>
                    <p className="text-gray-400">The Weeknd • Released: Nov 29, 2019</p>
                </div>

                {/* Controls */}
                <div className="mt-8 flex flex-col items-center">
                    {/* Buttons */}
                    <div className="flex items-center gap-6 mb-4">
                        <Shuffle size={22} className="cursor-pointer hover:text-green-400" />
                        <SkipBack size={32} className="cursor-pointer hover:text-green-400" />
                        <button
                            onClick={togglePlay}
                            className="bg-green-500 hover:bg-green-400 rounded-full p-4"
                        >
                            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                        </button>
                        <SkipForward size={32} className="cursor-pointer hover:text-green-400" />
                        <Repeat size={22} className="cursor-pointer hover:text-green-400" />
                    </div>

                    {/* Progress bar */}
                    <div className="w-full max-w-lg flex items-center gap-3">
                        <span className="text-xs text-gray-400">{formatTime(progress)}</span>
                        <input
                            type="range"
                            min={0}
                            max={duration}
                            value={progress}
                            onChange={handleSeek}
                            className="flex-1 cursor-pointer"
                        />
                        <span className="text-xs text-gray-400">{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Comments */}
                <div className="mt-10">
                    <h2 className="text-lg font-semibold mb-3">Comments</h2>
                    <div className="space-y-4">
                        <div className="bg-[#1e1e1e] p-3 rounded-lg">
                            <p className="text-sm"><span className="font-semibold">Alice:</span> Love this track! 🔥</p>
                        </div>
                        <div className="bg-[#1e1e1e] p-3 rounded-lg">
                            <p className="text-sm"><span className="font-semibold">Bob:</span> Perfect for night drives 🚗✨</p>
                        </div>
                        <div className="bg-[#1e1e1e] p-3 rounded-lg">
                            <p className="text-sm"><span className="font-semibold">Charlie:</span> This never gets old ❤️</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Suggested songs */}
            <aside className="w-80 border-l border-gray-800 p-6 hidden md:block">
                <h2 className="text-lg font-semibold mb-4">Related Songs</h2>
                <ul className="space-y-4">
                    {["Save Your Tears", "Starboy", "After Hours"].map((song, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-3 cursor-pointer hover:bg-[#1e1e1e] p-2 rounded-lg"
                        >
                            <img
                                src={`https://source.unsplash.com/80x80/?music,album,${i}`}
                                alt={song}
                                className="w-12 h-12 rounded"
                            />
                            <div>
                                <p className="font-medium">{song}</p>
                                <p className="text-xs text-gray-400">The Weeknd</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Hidden audio player */}
            <audio
                ref={audioRef}
                src={starboy}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    );
};

export default Player;