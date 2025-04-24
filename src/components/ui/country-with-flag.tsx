interface CountryWithFlagProps {
  country: string;
  code: string;
}

export default function CountryWithFlag(props: CountryWithFlagProps) {
  const { country, code } = props;
  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      <span
        className={`fp ${code.toLowerCase()}`}
        title={country}
        style={{ marginRight: "3px" }}
      ></span>
      <span>{country}</span>
    </span>
  );
}
