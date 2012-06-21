#!/usr/bin/env python
# -*- coding: utf-8 -*-

from setuptools import setup

setup(
    name='TracEasyOrder',
    version='0.1',
    packages=['traceasyorder'],
    author='Erik Bray',
    author_email='erik.m.bray@gmail.com',
    description='Adds a nicer (JavaScript-based) UI for ordering enumerable '
                'ticket fields (severity, type, etc.) in Trac.',
    install_requires=['Trac>=0.12'],
    entry_points={'trac.plugins': ['traceasyorder = traceasyorder']}
)
