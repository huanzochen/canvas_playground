import { NavLink } from "react-router";

export function Welcome() {
  return (
    <main className="flex items-start justify-start pt-2 pb-2 border border-2 border-gray-400 rounded-lg">
      <div className="flex-1 flex flex-col items-start gap-2 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-full max-w-[500px] p-4">{"Canvas Practice"}</div>
        </header>
        <div className="max-w-[300px] w-full space-y-3 px-2">
          <nav className="rounded-xl border border-gray-200 p-2 dark:border-gray-700 space-y-1">
            <p className="leading-6 text-lg text-gray-700 dark:text-gray-200">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                {"Home"}
              </NavLink>
            </p>
            <ul>
              <NavLink
                to="/simple-hook"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                {"Simple Hook"}
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to="/hook"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                {"Hook"}
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to="/left-panel"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                {"Left Panel"}
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
