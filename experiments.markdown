---
title: "Liam Reese's Experiments"

embed_title: "Liam Reese's Experiments"
embed_description: "Various JS / WASM experiments hosted on Liam Reese's website"

layout: base
---

{% capture experiments %}

{%- for post in site.experiments -%}
<div class="flex_row">
  <project_card class="blog_post">
    <h3>
      <span class="post-meta">{{ post.date | date: date_format }}</span>
      -
      <span>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </span>
    </h3>

    {%- if site.show_excerpts -%}
    <p>
      {{ post.excerpt }}
    </p>
    {%- endif -%}
  </project_card>
</div>
{%- endfor -%}

{% endcapture %}


{% include experience_block.html

title="Experiments"

content=experiments

%}