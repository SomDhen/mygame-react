import { Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameGrid() {
  const { games, error, isLoading } = useGames();

  return (
    <div>
      {error && <Text color="red">{error}</Text>}
      {isLoading && <Spinner color="red.500" />}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameGrid;
