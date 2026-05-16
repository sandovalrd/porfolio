import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";

interface MenuItemProps {
  route: string;
  item: string;
}

const MenuItem = ({ route, item }: MenuItemProps) => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(location.pathname === `/${route}`);
  }, [location, route]);

  return (
    <>
      <Link
        to={`/${route}`}
        className={`text-base capitalize ${
          active
            ? "text-gray-800 font-bold dark:text-gray-200"
            : "text-gray-600 dark:text-gray-200 font-normal"
        }`}
      >
        {active ? (
          <RoughNotation
            type="highlight"
            multiline={true}
            padding={[0, 2]}
            iterations={1}
            show={true}
            animationDuration={800}
            color={"#F59E0B"}
          >
            {item}
          </RoughNotation>
        ) : (
          <> {item} </>
        )}
      </Link>
    </>
  );
};

export default MenuItem;
