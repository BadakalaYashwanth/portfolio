export default function Footer() {
    return (
        <footer className="py-8 bg-ferrari-black border-t border-white/5 text-center">
            <div className="text-white
 flex items-center justify-center gap-2 text-gray-600 text-sm font-mono">
                <span>© {new Date().getFullYear()} DEV. ENGINEERED IN INDIA</span>

            </div>
        </footer>
    );
}
