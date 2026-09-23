import os
import asyncio


from dotenv import load_dotenv
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import (
    Application,
    CallbackQueryHandler,
    CommandHandler,
    ContextTypes,
)

from core.oracle import flip as oracle_flip

load_dotenv()

TOKEN = os.getenv("BOT_TOKEN")

if not TOKEN:
    raise RuntimeError("BOT_TOKEN not found in .env")


def flip_keyboard():
    return InlineKeyboardMarkup(
        [[InlineKeyboardButton("FLIP", callback_data="flip")]]
    )


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = (
        "<b>ORACLE</b>\n\n"
        "Think of your question.\n"
        "You don't need to type it.\n\n"
        "When you're ready, press <b>FLIP</b>."
    )

    await update.message.reply_text(
        text,
        reply_markup=flip_keyboard(),
        parse_mode="HTML",
    )


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = (
        "<b>ORACLE</b>\n\n"
        "Oracle gives the first answer.\n"
        "Your reaction gives the second.\n\n"
        "Think of a question and press <b>FLIP</b>.\n"
        "The answer is random: YES, NO, or UNDEFINED.\n\n"
        "Oracle doesn't know. That's the point."
    )

    await update.message.reply_text(
        text,
        reply_markup=flip_keyboard(),
        parse_mode="HTML",
    )


async def flip(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()

    await query.edit_message_text(
        "<b>ORACLE</b>\n\n.",
        reply_markup=None,
        parse_mode="HTML",
    )

    await asyncio.sleep(0.3)

    await query.edit_message_text(
        "<b>ORACLE</b>\n\n..",
        reply_markup=None,
        parse_mode="HTML",
    )

    await asyncio.sleep(0.3)

    await query.edit_message_text(
        "<b>ORACLE</b>\n\n...",
        reply_markup=None,
        parse_mode="HTML",
    )

    await asyncio.sleep(0.4)

    answer = oracle_flip()

    text = (
        "<b>ORACLE</b>\n\n"
        f"<b><u>{answer}</u></b>\n\n"
        "Oracle gives the first answer.\n"
        "Your reaction gives the second."
    )

    await query.edit_message_text(
        text,
        reply_markup=flip_keyboard(),
        parse_mode="HTML",
    )


def main():
    app = (
        Application.builder()
        .token(TOKEN)
        .connect_timeout(30)
        .read_timeout(30)
        .write_timeout(30)
        .pool_timeout(30)
        .build()
    )

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(CommandHandler("flip", start))
    app.add_handler(CallbackQueryHandler(flip, pattern="^flip$"))

    print("Oracle Bot is running...")
    app.run_polling()


if __name__ == "__main__":
    main()