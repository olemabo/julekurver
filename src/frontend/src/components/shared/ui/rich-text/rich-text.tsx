import styles from "./rich-text.module.css";

type RichTextProps = {
  content?: string;
};

export default function RichText({ content }: RichTextProps) {
  if (!content) return null;
  return (
    <div
      className={styles.richTextWrapper}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
