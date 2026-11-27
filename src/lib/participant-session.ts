export const PARTICIPANT_SESSION_KEY = "uty_growpath_participant_session";

export type ParticipantSession = {
  name: string;
  status: "mahasiswa" | "umum";
};

export function readParticipantSession(): ParticipantSession | null {
  try {
    const value = sessionStorage.getItem(PARTICIPANT_SESSION_KEY);
    if (!value) return null;

    const session: unknown = JSON.parse(value);
    if (
      typeof session === "object" &&
      session !== null &&
      "name" in session &&
      typeof session.name === "string" &&
      session.name.trim() &&
      "status" in session &&
      (session.status === "mahasiswa" || session.status === "umum")
    ) {
      return { name: session.name, status: session.status };
    }
  } catch {
    return null;
  }

  return null;
}

const SESSION_CHANGE_EVENT = "uty-growpath-session-change";

export function subscribeToParticipantSession(onChange: () => void) {
  window.addEventListener(SESSION_CHANGE_EVENT, onChange);
  return () => window.removeEventListener(SESSION_CHANGE_EVENT, onChange);
}

export function getParticipantSessionSnapshot() {
  try {
    return sessionStorage.getItem(PARTICIPANT_SESSION_KEY);
  } catch {
    return null;
  }
}

export function saveParticipantSession(session: ParticipantSession) {
  try {
    sessionStorage.setItem(PARTICIPANT_SESSION_KEY, JSON.stringify(session));
    window.dispatchEvent(new Event(SESSION_CHANGE_EVENT));
  } catch {
    // The current page still works if browser storage is unavailable.
  }
}
