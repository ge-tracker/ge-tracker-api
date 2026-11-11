# GE-Tracker API client

The official client for the GE-Tracker API. Terms mirror the backend's
`GLOSSARY.md`, which is canonical.

## Language

### Item lists

**Special Update**:
A major OSRS release (a skill, area, boss or raid) that gets its own item list,
e.g. Sailing, Yama, Delve or The Fractured Archive (TFA).
_Avoid_: game update, release

**The Fractured Archive (TFA)**:
An OSRS raid, and the Special Update behind the TFA Items list.
_Avoid_: Fractured Archive, TFA raid

**High Value Item**:
An individual item (never an Item Set) that is a Megarare, a 3rd Age Item worth
at least 50m, or any item worth at least 350m.
_Avoid_: expensive item, rare item

### Game modes

**Game Mode**:
A separate Grand Exchange economy whose prices GE Tracker tracks. A client
views one Game Mode at a time; Graphs can override it with their own.
_Avoid_: DMM (as the general term), event mode, world type

**Main Game**:
OSRS's standard worlds and the economy they share. The default Game Mode.
_Avoid_: OSRS (Events and Hardcore Worlds are OSRS too), normal mode

**Event**:
A time-boxed OSRS Game Mode, such as Deadman Mode (DMM) or Fresh Start Worlds
(FSW). At most one runs at a time.
_Avoid_: DMM (except for Deadman Mode itself), season, tournament

**Hardcore Worlds**:
A permanent, members-only OSRS Game Mode on its own servers. HCW for short.
Can run alongside an Event.
_Avoid_: hardcore, HC (Hardcore Ironman is an account type, not a Game Mode)
