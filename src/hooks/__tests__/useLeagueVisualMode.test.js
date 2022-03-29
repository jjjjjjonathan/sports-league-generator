import { renderHook, act } from "@testing-library/react-hooks";

import useLeagueVisualMode from "../useLeagueVisualMode";

const FIRST = "FIRST";
const SECOND = "SECOND";
const THIRD = "THIRD";

test("useLeagueVisualMode should transition to another mode", () => {
  const { result } = renderHook(() => useLeagueVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);
});

test("useLeagueVisualMode should return to previous mode", () => {
  const { result } = renderHook(() => useLeagueVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);

  act(() => result.current.transition(THIRD));
  expect(result.current.mode).toBe(THIRD);

  act(() => result.current.back());
  expect(result.current.mode).toBe(SECOND);

  act(() => result.current.back());
  expect(result.current.mode).toBe(FIRST);
});

test("useLeagueVisualMode should not return to previous mode if already at initial", () => {
  const { result } = renderHook(() => useLeagueVisualMode(FIRST));

  act(() => result.current.back());
  expect(result.current.mode).toBe(FIRST);
});

test("useLeagueVisualMode should replace the current mode", () => {
  const { result } = renderHook(() => useLeagueVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);

  // Passing "true" to transition(THIRD, true) says "Transition to THIRD by REPLACING SECOND"
  act(() => result.current.transition(THIRD, true));
  expect(result.current.mode).toBe(THIRD);

  act(() => result.current.back());
  expect(result.current.mode).toBe(FIRST);
});