---
title: Blog
layout: default
---

testing...

<ul>
{% for post in collections.post reversed %}
<li>
    <a href="{{post.url}}">{{ post.data.title }}</a><br>
    {{ post.data.date | formatDate }} | <em>{{ post.data.summary }}</em> | {{ post.data.category }}
    </li>
{% endfor %}
</ul>
