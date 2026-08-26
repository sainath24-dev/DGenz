import React from "react"
import { cn } from "@/lib/utils"

type As = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"

type KineticTextProps = React.HTMLAttributes<HTMLElement> & {
  text: string
  as?: As
}

export function KineticText({
  text,
  as: Tag = "h1",
  className = "",
  style,
  ...rest
}: KineticTextProps) {
  const mergedStyle = {
    "--hover-padding": "calc(1em / 16)",
    "--text-stroke-width": "calc(1em * 125 / 6000)",
    ...(style as React.CSSProperties | undefined),
  } as React.CSSProperties

  return (
    <Tag
      {...rest}
      className={cn("inline-flex flex-wrap font-[600] tracking-tight select-none", className)}
      style={mergedStyle}
    >
      {text.split("").map((letter, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block [will-change:font-weight,-webkit-text-stroke-width,padding] [-webkit-text-stroke-color:transparent] [-webkit-text-stroke-width:var(--text-stroke-width)] [transition:font-weight_0.35s,_-webkit-text-stroke-color_0.35s,_padding_0.35s,transform_0.2s] hover:[padding-inline:var(--hover-padding)] hover:font-[900] hover:scale-105 hover:[-webkit-text-stroke-color:currentcolor] hover:[-webkit-text-stroke-width:calc(var(--text-stroke-width)*2)] has-[+span+span:hover]:font-[500] has-[+span:hover]:[padding-inline:var(--hover-padding)] has-[+span:hover]:font-[700] [:hover+&]:[padding-inline:var(--hover-padding)] [:hover+&]:font-[700] [:hover+span+&]:font-[500]"
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </Tag>
  )
}

export default KineticText;
