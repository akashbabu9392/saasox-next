import Link from "next/link";

type BreadCrumbItem = { label: string; href?: string };

const BreadCumb = ({
  Title,
  bgimg,
  crumbs,
}: {
  Title: string;
  bgimg: string;
  crumbs?: BreadCrumbItem[];
}) => {
  const resolvedCrumbs: BreadCrumbItem[] =
    crumbs?.length ? crumbs : [{ label: "Home", href: "/" }, { label: Title }];
    
    return (

    <section className="cs_page_heading cs_bg_filed text-center cs_gray_bg_2 position-relative overflow-hidden" style={{ backgroundImage: `url(${bgimg})`}} >
      <div className="container">
        <h1 className="cs_fs_64 cs_bold cs_mb_8">{Title}</h1>
        <ol className="breadcrumb cs_fs_18 cs_heading_font">
          {resolvedCrumbs.map((c, idx) => {
            const isLast = idx === resolvedCrumbs.length - 1;
            if (isLast || !c.href) {
              return (
                <li key={`${c.label}-${idx}`} className="breadcrumb-item active">
                  {c.label}
                </li>
              );
            }
            return (
              <li key={`${c.label}-${idx}`} className="breadcrumb-item">
                <Link aria-label={`${c.label} breadcrumb link`} href={c.href}>
                  {c.label}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>


    );
};

export default BreadCumb;