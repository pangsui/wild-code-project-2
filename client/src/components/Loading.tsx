import styles from "./Loader.module.css";

export default function Loading() {
  return (
    <div className={styles.spinner}>
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="spinner"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          //   fill="none"
          stroke="#4f46e5"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
          transform="rotate(-90 25 25)"
        />
      </svg>
    </div>
  );
}
