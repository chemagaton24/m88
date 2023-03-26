import { MatchBoard as MatchBoardSX } from "./Styled";

const matchList = [
  {
    league: "Euro Cup",
    matches: [
      {
        teamA: "Manchester City",
        teamB: "Manchester City",
        date: "Feb 00",
      },
      {
        teamA: "Manchester City",
        teamB: "Manchester City",
        date: "Feb 00",
      },
      {
        teamA: "Manchester City",
        teamB: "Manchester City",
        date: "Feb 00",
      },
      {
        teamA: "Manchester City",
        teamB: "Manchester City",
        date: "Feb 00",
      },
      {
        teamA: "Manchester City",
        teamB: "Manchester City",
        date: "Feb 00",
      },
    ],
  },
  {
    league: "Euro Cup",
    matches: [
      {
        teamA: "Manchester City",
        teamB: "Manchester City",
        date: "Feb 00",
      },
      {
        teamA: "Manchester City",
        teamB: "Manchester City",
        date: "Feb 00",
      },
      {
        teamA: "Manchester City",
        teamB: "Manchester City",
        date: "Feb 00",
      },
      {
        teamA: "Manchester City",
        teamB: "Manchester City",
        date: "Feb 00",
      },
      {
        teamA: "Manchester City",
        teamB: "Manchester City",
        date: "Feb 00",
      },
    ],
  },
];
const MatchBoard = () => (
  <MatchBoardSX arrows={false}>
    {matchList.map(({ league, matches }, key) => (
      <div className="item" key={key}>
        <table>
          <caption>{league}</caption>
          <tbody>
            {matches.map(({ teamA, teamB, date }, key) => (
              <tr key={key}>
                <td>{teamA}</td>
                <td>{date}</td>
                <td>{teamB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </MatchBoardSX>
);

export default MatchBoard;
