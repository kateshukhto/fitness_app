import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string,
  selectedPage: string,
  onSelectedPage: (value: string) => void
}
const Link = ({page, selectedPage, onSelectedPage}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "")
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