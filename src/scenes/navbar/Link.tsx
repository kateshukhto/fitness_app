import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
type Props = {
  page: string,
  selectedPage: SelectedPage,
  onSelectedPage: (value: SelectedPage) => void
}
const Link = ({page, selectedPage, onSelectedPage}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300
    `}
    href={`#${lowerCasePage}`}
    onClick={() => onSelectedPage(lowerCasePage)}
  >
    {page}
  </AnchorLink>
}

export default Link;