/*** Created by Anas on 18/04/2017.*/

// selects multiple colours of white & black via refinement active / element on product > dresses
export const multipleColours = () =>
{
    browser.elementActive('<li class="refinement active"> <a href="/en/tsuk/category/clothing-427/dresses/white/N-82zZqn9Zdf2Zdgl?Nrpp=20&amp;siteId=%2F12556" title="black"> <span class="lbl"> black <span class="filter_item_count">(250)</span> </span> </a> </li>')
    browser.elementActive('<li class="refinement active"> <a href="/en/tsuk/category/clothing-427/dresses/black/N-82zZqn9ZdeoZdgl?Nrpp=20&amp;siteId=%2F12556" title="white"> <span class="lbl"> white <span class="filter_item_count">(250)</span> </span> </a> </li>')
}

// another method is to write code - more suitable if more colours are selected then these may be grouped via refinement active class