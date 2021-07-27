import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink( {children, shouldMatchExactHref=false, ...rest } : ActiveLinkProps ) {
  const { asPath } = useRouter();
  
  let isActive = false;

  // O link tem que ser exato
  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  // e o link não for expiration
  if (!shouldMatchExactHref &&
      (asPath.startsWith(String(rest.href)) || 
       asPath.startsWith(String(rest.as)))) {
         isActive = true;
       }


  return (
    <Link { ...rest } >
      {cloneElement(children, {
        color: isActive ? 'blue.400' : 'gray.50'
      })}
    </Link>
  );
}